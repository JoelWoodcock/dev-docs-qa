import { merge } from 'lodash';
import request from 'request';

function flarum({ identification, password }) {
  return {
    method: 'POST',
    url: `${process.env.FLARUM_URL}/api/token`,
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded',
    },
    form: { password, identification },
  };
}

function clientsService(forumId) {
  return {
    method: 'POST',
    url: `${process.env.CLIENTS_SERVICE_URL}/user`,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ forumId }),
  };
}

export default (req, res) => {
  request(flarum(req.body), (error, response, body) => {
    if (error) throw new Error(error);
    const payload = JSON.parse(body);
    if (payload.errors) {
      merge(req.session, { errors: payload.errors });
      res.redirect('/login');
      return;
    }
    const forumId = payload.userId;
    const forumToken = payload.token;

    request(clientsService(forumId), (err, resp, userBody) => {
      const userPayload = JSON.parse(userBody);
      merge(req.session, userPayload, { forumToken });
      res.redirect('/account');
    });
  });
};

Probably needs a guide on how to edit the widget instead of this i.e. how to make a service/events journey, simple routing changes, basic layout changes, etc. 

Questions:
What do I do now that I'm hosting my widget locally? - Edit it
How do I edit it? - Open it in a text editor - Which?, what's that?
What files do what? - explain file structure - where can I edit what?
How do I change my journey route? - What pages work with what company/setup? - How do I make a services/event widget?
How do I edit the layout/structure of each page?
How do I edit the text on each page?
How do I edit the colours/fonts/whatever?
How do I add my logos/pictures/web links to each page?
What do I do with it once I have finished editing it? - host it somewhere!

# How it Works

The BookingBug JavaScript API is in fact built on top of the Google library [AngularJS](https://angularjs.org/).
It then, in turn, uses the BookingBug REST API to access data, which means that you can also use the REST API and extend the JavaScript SDK as much as you need for different business use cases.

[To begin editing your widget, open the javascript sdk folder in a text editor such as Sublime Text. From here, you can access and edit your widget etc.]

# HTML in-line attribute based mark-up (Angular Directives)

The API makes use of HTML attributes to identify important sections of your page in which to add data or respond to actions. These special attributes derive different meaning, such as specifying the data you wish to load, controlling a loop around a list of items, or deciding which HTML elements to show or hide in different circumstances.

# Handlebars {{ var }}

AngularJS uses a notation to display custom data embedded directly in your HTML. The BookingBug script parses these special tags when it loads to replace with the correct live data. This allows you to show dynamic and real-time data quickly and easily in your website. That data could be anything from a list of services you offer, to the number of spaces remaining for an event.

# HTML partials

A key part of the booking process is the need for the customer to navigate through a clear and simple interface that starts with them seeing services and availability, and ends with them receiving a confirmation of their booking. BookingBug gives you, the developer or web designer, complete flexibility over this journey.

A key part of how BookingBug makes this possible without using iframes is to use a series of HTML partials. We can host and run these partials, or you can host them on your own site as you help the client navigate through the checkout. These can be full pages, pop-ups, or just small AJAX-loaded pages. BookingBug gives you the tools to navigate and cache the data and pages creating a smooth, rich customer experience. We are also working on a host of examples and demo's you can copy and customize and tailor for your own needs and requirements.

## Further Reading
You won't need to know everything about angular and handle bars to use the SDK but you may want to find out more.

- [Learn how to HTML/CSS/whatever here: https://www.codecademy.com/learn]
- [Learn more about Handlebars](http://code.tutsplus.com/tutorials/an-introduction-to-handlebars--net-27761)
- [Learn more about Angular](https://www.codecademy.com/learn/learn-angularjs)
- [Learn more about HTML Partials](http://handlebarsjs.com/partials.html)

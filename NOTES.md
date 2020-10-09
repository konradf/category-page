## home24 task solution

Hello :) There are few notes about my solution. Additional ideas and possible improvements are in TODO file.

Application main component is **CategoryPage**. It accepts ID for the main category which should be fetched.
I did some graphQL investigation - current approach is to fetch articles for the main category and for its
subcategories. So they are all retrieved on the beginning and assigned to main state. From then, the interactions
(changing category, searching article) are done by filtering out from the initial state.
With additional queries it could be extended - e.g. loading more results (on scroll or user interaction).
Because of that, search only applies to already retrieved results (50 for each category).

The visual components are places in **components/** directory. Most of the business logic is kept in **libs/**.
There is also one custom hook - for simple routing, as adding 3rd party library for that use case
would be an overkill :). Tests are added in following `__tests__` directories.

Components are styled using **Emotion** - and for sure this is area which can be improved.
I didn't use **styled-system**, because lack of time, however I've read few articles and documentation,
to become more familiar with it. And definitely it could help theming and building styles based on them.

Hope you'll like my approach, as I've put some time into it :)

Kind regards,
Konrad

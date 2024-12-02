# Api Automations
Api Automations is a Directus extension that allows users to make API calls within Directus in a user-friendly way. It provides a mechanism to create fields where users can input data as defined when creating the automation. Additionally, it allows users to utilize other data, such as previous responses, to enhance the automation process.

## Demo
[Simple intro input fields](https://raw.githubusercontent.com/icmric/api-automations/refs/heads/main/images/simple-intro-demo.jpg)

[Simple intro result](https://raw.githubusercontent.com/icmric/api-automations/refs/heads/main/images/simple-intro-result.jpg)

## Setup
Once the package is installed, first create the collections outlined below, then enable the module in Settings -> Settings -> Modules -> Automations

**Key Terms**
* Source: General use API endpoint
* Automation: Specialised use case of a source

**Key Data**
* $tool: Information from the selected source
* $request: Use respective parameters from the URL as the default value (if the parameters exist)
* prevResponses: An array of previous responses from the current request (only useful if using additional automation)
    * To access data from the first response: {prevResponses.0}
* apiResponse: The response of the current API call
* reqAccountability: Directus accountability information for the user who triggered the automation

### Automations
[automations overview](https://raw.githubusercontent.com/icmric/api-automations/refs/heads/main/images/automations-overview.jpg)

* title: Title of the automation (Input - String)
* source: Many-To-One Relation with sources collection (Many-to-One, Related Collection - sources, Display Template - title)
* description: Description of what the automation does (Textarea - Text)
* body: Intended for use in API request body (Textarea - Text)
* extra_values: Specify extra values for the user to input (repeater, key - input, value - input)
* display_group: Used to group automations together (Dropdown - String)
* additional_automations: Used to add additional automations to run after the first one is completed (Builder M2A - sources, interface -> prefix - item (automation) -> title)

extra_values repeater
[extra_values repeater](https://raw.githubusercontent.com/icmric/api-automations/refs/heads/main/images/Extra-values-repeater.jpg)

additional_automations
[additional_automations](https://raw.githubusercontent.com/icmric/api-automations/refs/heads/main/images/aditional-automations.jpg)


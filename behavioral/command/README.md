# Command Pattern

Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations. [source](https://refactoring.guru/design-patterns/command)

In this example [Remote](Remote.ts) uses [Command](Commands.ts) to communicate with [Television](Television.ts).

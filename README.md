# Tournament

## Backend ##

Project is done with .NET 5 version (for SDK).

Main Backend project (WebApi) is API.

Other projects (classlibs), as well as the API, contain .csproj file where you can find all the dependencies. For dependencies, use NuGET central repository.

To run the project in terminal, just navigate to API directory, paste 'dotnet watch run' command and execute it.

## Frontend ##
Run 'npm install' command after cloning the project.

Project is divided into three main parts:
1. modules - feature parts, in this case for players and matches, 
2. shared module - for every dependency that should be spread across the app and
3. store - where all the logic behind the app is located.

To start the application in the browser, simply execute 'ng s -o' command from the command line within the right directory.

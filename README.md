
**Setup**

In main project folder: 
```shell
npm install 
```
or if it's been a while since packages were last updated (09/04/2025) instead run:
```shell
npm update 
```
then to start development server:
```shell
npm run start
```
Your site is now running at http://localhost:8000!

repeat these steps from the sanity subfolder to start the sanity instance
should run at http://localhost:3333 and ask for authentication to sanity.io so you may need to request access.

Changes to the website code will refresh on localhost automatically.
To see sanity content changes reflected on the localhost site, you'll need to cancel and rerun:
```shell
npm run start
```
Until gatbsy watchmode is added?


To Deploy (Nathan): 
- Change this repo's visibility to public, then push your changes to main, afterwards change it back to private.
...

# 21/3/26
Nathan: I’ve just gone ahead and updated the website CMS to include info about Viscera, as well as update the year picker for project, there’s still a few things left to do such as:
- [ ] The project collage at the bottom of the hero page needs to include Viscera
- [ ] Updating the packages and cleaning up tech debt

Side note, the website repo runs better on macOS than Windows from personal experience
   

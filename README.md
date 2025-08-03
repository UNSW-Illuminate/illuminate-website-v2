
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
npm run develop
```
Your site is now running at http://localhost:8000!

repeat these steps from the sanity subfolder to start the sanity instance
should run at http://localhost:3333 and ask for authentication to sanity.io so you may need to request access.

Changes to the website code will refresh on localhost automatically.
To see sanity content changes reflected on the localhost site, you'll need to cancel and rerun:
```shell
npm run develop
```
Until gatbsy watchmode is added?


To Deploy (Nathan): 
- I changed this repo's visibility to public so that we could deploy our changes to Vercel - hopefully it should just automatically deploy when new changes are pushed to main
...



   
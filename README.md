### Project Title
Sowlution Text Search Assessment

### Description
Search box where users can type in keywords or phrases, and your application returns results with the text being searched for highlighted.

### Notes
- Node.js version "^18.18.0 || ^19.8.0 || >= 20.0.0" is required.
- For better experience try the app on Incognito mode.

### How to Install and Run the Project
- Run the following command: `npm install`
- When all dependencies are installed run this command: `npm run dev` to try the app 
     - Local:        http://localhost:3000
     - Network:      http://192.168.1.7:3000

### Comments
- I found that this way how this app builded enough depending on the requirements demanded in the project instructions.
- My point of view is the instructions opened a lots of ideas like semantic search where I thought that I can use advance tools like pinecone and openai or upstach for vector similarity search but the simplicity of instructions didn't suggest that I should go so far with that.

### Plan and Implementation
- First, I chose `Next.js` for building this app.
- Then I chose `shadcn/ui` library for saving time and because thi UI library is amazing for Tailwind fans with professional and customizable components.
- I used `TypeScript` that is best choice for scalable apps and reducing number of bugs.
- I prefer `src` folder structure because it makes the app organized.
- I generated mock data (articles). you can find it inside `db` folder.
- I tried to make reusable components that are maintainable.  Every component is located inside `components` folder.
- I chose `search query` method for searching behavior.
- I filtered data (articles) by using `query param`.
- I used `REGEX` to find text or word that matches the pattern of query then highlighted it with `mark` tag.

### Thanks for this opportunity. ###

var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: "https://github.com/GraceGSy/VisRecResults.git", // Update to point to your repository  
        user: {
            name: 'Grace Guo', // update to use your name
            email: 'graceguo43@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
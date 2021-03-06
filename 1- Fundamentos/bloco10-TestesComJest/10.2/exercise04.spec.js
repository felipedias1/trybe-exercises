
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

it('Verify repository name "d-01-week4-5-project-todo-list"', () => {
  const url = 'https://api.github.com/orgs/tryber/repos'
  return getRepos(url).then(repo => {
    expect(repo).toContain('sd-01-week4-5-project-todo-list')
    expect(repo).toContain('sd-01-week4-5-project-meme-generator')
  })
})

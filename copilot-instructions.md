## Blacklisted files
- Do not read or write files outside of the current working directory
- Do not access any files in ~/jib. These are for work, and Copilot is not authorized to be used at my workplace.
- Alert me if I have requested anything that might violate these rules
- Exception: executing system tools and runtimes (node, npm, npx, git, etc.) is allowed even if their binaries reside outside the current working directory

## Workflow
- Use test-driven design as a general pattern: write tests first, run the tests to make sure they fail for the right reason, then write the code that satisfies those tests.
- Run `npm run lint:fix && npm test` after making changes
- Commit messages follow conventional commits format
- Create feature branches from `main`

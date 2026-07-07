# SprigAgent quarantine — CLAUDE.md @ 20260707-033737


These lines were removed by **approved** prunes and are preserved here verbatim.
Nothing is destroyed — every block below is fully recoverable.

## Code style

- id: ## Code style
- verdict: ACCEPT
- success: 100% → 100%
- tokens: 631 → 411 (-34.9%)

Removed lines (16):
```
## Code style
- Use 2-space indentation everywhere.
- Use double quotes for all strings.
- Always end statements with a semicolon.
- Add trailing commas on all multi-line literals and parameter lists.
- Keep lines under 80 characters.
- Always put one space inside curly braces: `{ foo }` not `{foo}`.
- Never leave trailing whitespace at the end of a line.
- Always end every file with a single newline.
- Order imports: node built-ins first, then third-party, then local.
- Use `const` by default; only use `let` when reassignment is required.
- Prefer arrow functions for callbacks passed to array methods.
- Name booleans with an `is`/`has`/`should` prefix.
- Use `camelCase` for variables and functions, `PascalCase` for types.
- Do not use `var` anywhere in the codebase.
- Avoid abbreviations in identifiers except well-known ones like `id` and `url`.
```

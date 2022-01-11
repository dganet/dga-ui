module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?'
            }
        ],
        actions: [
            {
                type: 'add',
                path:
                    '../src/components/{{pascalCase name}}/{{pascalCase name}}Component.tsx',
                templateFile: 'templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path:
                    '../src/components/{{pascalCase name}}/{{pascalCase name}}Component.styles.ts',
                templateFile: 'templates/styles.ts.hbs'
            },
            {
                type: 'add',
                path:
                    '../src/components/{{pascalCase name}}/{{pascalCase name}}Component.stories.tsx',
                templateFile: 'templates/stories.tsx.hbs'
            },
            {
                type: 'add',
                path:
                    '../src/components/{{pascalCase name}}/{{pascalCase name}}Component.types.ts',
                templateFile: 'templates/types.ts.hbs'
            },
            {
                type: 'add',
                path:
                    '../src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}Component.tsx',
                templateFile: 'templates/test.tsx.hbs'
            }
        ]
    })
}

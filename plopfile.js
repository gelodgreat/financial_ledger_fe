module.exports = (plop) => {
    plop.setGenerator('base', {
        description: 'Create a base component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your base component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/base/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/base/index.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/base/{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'plop-templates/base/base.props.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/base/{{pascalCase name}}/{{pascalCase name}}.style.ts',
                templateFile: 'plop-templates/base/base.style.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/base/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
                templateFile: 'plop-templates/base/base.view.tsx.hbs',
            },
            {
                type: 'add',
                path: '.storybook/stories/base/{{pascalCase name}}.js',
                templateFile: 'plop-templates/base/base.story.js.hbs',
            },
        ],
    });
    plop.setGenerator('module', {
        description: 'Create a module component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your module component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/module/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/module/index.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/module/{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'plop-templates/module/module.props.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/module/{{pascalCase name}}/{{pascalCase name}}.style.ts',
                templateFile: 'plop-templates/module/module.style.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
                templateFile: 'plop-templates/module/module.view.tsx.hbs',
            },
            {
                type: 'add',
                path: '.storybook/stories/module/{{pascalCase name}}.js',
                templateFile: 'plop-templates/module/module.story.js.hbs',
            },
        ],
    });
    plop.setGenerator('smart module', {
        description: 'Create a smart module component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your smart module component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/module/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/smart-module/index.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/module/{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'plop-templates/smart-module/module.props.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/module/{{pascalCase name}}/{{pascalCase name}}.style.ts',
                templateFile: 'plop-templates/smart-module/module.style.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
                templateFile: 'plop-templates/smart-module/module.view.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/module/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
                templateFile: 'plop-templates/smart-module/module.container.tsx.hbs',
            },
            {
                type: 'add',
                path: '.storybook/stories/module/{{pascalCase name}}.js',
                templateFile: 'plop-templates/smart-module/module.story.js.hbs',
            },
        ],
    });
    plop.setGenerator('layout', {
        description: 'Create a layout component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your layout component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/layout/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/layout/index.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'plop-templates/layout/layout.props.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.style.ts',
                templateFile: 'plop-templates/layout/layout.style.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
                templateFile: 'plop-templates/layout/layout.view.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/layout/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
                templateFile: 'plop-templates/layout/layout.container.tsx.hbs',
            },
            {
                type: 'add',
                path: '.storybook/stories/layout/{{pascalCase name}}.js',
                templateFile: 'plop-templates/layout/layout.story.js.hbs',
            },
        ],
    });
    plop.setGenerator('route', {
        description: 'Create a route component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your route name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/routes/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/route/index.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'plop-templates/route/route.props.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.style.ts',
                templateFile: 'plop-templates/route/route.style.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/routes/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
                templateFile: 'plop-templates/route/route.view.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/routes/{{pascalCase name}}/{{pascalCase name}}.container.tsx',
                templateFile: 'plop-templates/route/route.container.tsx.hbs',
            },
        ],
    });
    plop.setGenerator('svg', {
        description: 'Create svg component and storybook entry',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your svg name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/base/SVG/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/svg/component.tsx.hbs',
            },
            {
                type: 'append',
                path: 'src/components/base/SVG/index.tsx',
                pattern: '/* PLOP_INJECT_IMPORT */',
                template:
                    "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
            },
            {
                type: 'append',
                path: '.storybook/stories/base/SVG.js',
                pattern: '/* PLOP_INJECT_IMPORT */',
                template: '  {{pascalCase name}},',
            },
            {
                type: 'append',
                path: '.storybook/stories/base/SVG.js',
                pattern: '{/* PLOP_INJECT_INSTANCE*/}',
                template: `        <Wrapper label="{{pascalCase name}}">
            <{{pascalCase name}} width={30} height={30} />
          </Wrapper>`,
            },
        ],
    });
};

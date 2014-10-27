module.exports = function (grunt) {
    grunt.initConfig({
        opt: {
            client: {
                tsMain: "scripts",
                tsMock: "mocks",
                tsTest: "test",

                less: "less",
                jsLib: "scripts/lib",
                cssLib: "css/lib",
                image: "images",
                imageLib: "images/lib",
                font: "css/fonts",

                tsTestResource: "test/resources",

                base: "",
                jsMainOut: "scripts",
                jsTestOut: "test",
                jsEspowerOut: "testEspowered",
                jsE2e: "e2e",
                jsE2eEspowerOut: "e2eEspowered",
                cssOut: "css"
            }
        },
        ts: {
            options: {
                compile: true,                 // perform compilation. [true (default) | false]
                comments: true,               // same as !removeComments. [true | false (default)]
                target: 'es5',                 // target javascript language. [es3 (default) | es5]
                // module: 'amd',                 // target javascript module style. [amd (default) | commonjs]
                noImplicitAny: true,
                sourceMap: true,               // generate a source map for every output js file. [true (default) | false]
                sourceRoot: '',                // where to locate TypeScript files. [(default) '' == source ts location]
                mapRoot: '',                   // where to locate .map.js files. [(default) '' == generated js location.]
                declaration: false             // generate a declaration .d.ts file for every output js file. [true | false (default)]
            },
            main: {
                src: ['<%= opt.client.tsMain %>/index.ts'],
                out: '<%= opt.client.tsMain %>/index.js',
                options: {
                    declaration: true
                }
            },
            test: {
                src: ['<%= opt.client.tsTest %>/index_spec.ts'],
                out: '<%= opt.client.tsTest %>/index_spec.js'
            }
        },
        bower: {
            install: {
                options: {
                    install: true,
                    copy: false,
                    verbose: true,
                    cleanBowerDir: false
                }
            }
        },
        dtsm: {
            main: {
                options: {
                    config: "dtsm.json"
                }
            }
        }
    });
    grunt.registerTask('setup', ['dtsm', 'bower']);
    grunt.registerTask('default', ['ts']);

    require('load-grunt-tasks')(grunt);
};

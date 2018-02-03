module.exports = function(grunt)
{
    var svgs    = '../../website/resources/icons/*.svg',
        sass    = '../../website/resources/sass/foundation/',
        font    = '../../website/assets/fonts/icons/';

    grunt.initConfig({
        webfont: {
            build: {
                src: svgs,
                dest: font,
                destCss: sass,
                types: ['eot,woff2,woff,ttf,svg'],
                options: {
                    stylesheet: 'scss',
                    fontFilename: 'icons-common',
                    engine: 'fontforge',
                    htmlDemo: false,
                    relativeFontPath: '../fonts/icons/',
                    templateOptions: { classPrefix: 'icon-' },
                    rename: function(name)
                    {
                        var filename = name.replace(/^.*[\\\/]/, '');
                        var path = name.replace(filename, '');

                        return filename.substring(3, filename.length);
                    }
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.registerTask('default', ['webfont:build'])
}
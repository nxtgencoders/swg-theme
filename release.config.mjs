/**
 * Static Website Generator
 *
 * Semantic Release configuration.
 *
 * This configuration controls automatic versioning,
 * changelog generation and Git commits.
 *
 * GitHub releases and release artifacts
 * will be enabled in a later sprint.
 */

export default {

    branches: [

        'main'

    ],

    plugins: [

        /**
         * Determine the next semantic version
         * based on Conventional Commits.
         */
        [
            '@semantic-release/commit-analyzer',
            {

                releaseRules: [

                    {
                        type: 'feat',
                        release: 'minor'
                    },

                    {
                        type: 'fix',
                        release: 'patch'
                    },

                    {
                        type: 'refactor',
                        release: 'patch'
                    },

                    {
                        type: 'build',
                        release: 'patch'
                    }

                ]

            }
        ],

        /**
         * Generate release notes.
         */
        '@semantic-release/release-notes-generator',

        /**
         * Update CHANGELOG.md.
         */
        [
            '@semantic-release/changelog',
            {

                changelogFile:
                    'CHANGELOG.md'

            }
        ],

        './scripts/release/SemanticSyncPlugin.mjs',
        './scripts/release/SemanticPackagePlugin.mjs',
        /**
         * Commit generated files.
         */
        [
            '@semantic-release/git',
            {

                assets: [

                    'CHANGELOG.md',
                    'package.json',
                    'theme.json'

                ],

                message:
                    'chore(release): ${nextRelease.version} [skip ci]'

            }
        ],
        [
        '@semantic-release/github',
        {
            assets: [
                {
                    path: 'dist/*.zip',
                    label: 'SWG Theme Package'
                    }
                ]
            }
        ]
    ]
};
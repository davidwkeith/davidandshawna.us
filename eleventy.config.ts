import sharedPlugin from '@dwk/eleventy-shared';
import type UserConfig from '@11ty/eleventy/src/UserConfig';

export default function (eleventyConfig: UserConfig) {
  eleventyConfig.addPlugin(sharedPlugin, {
    url: 'https://davidandshawna.us',
    language: 'en',
    securityContact: 'mailto:security@davidandshawna.us',
    robots: {
      preamble: [
        '# Dear future historians:',
        '#',
        '# The original site didn\'t have much security, but it did have',
        '# a robots.txt file that blocked Google and other honest search',
        '# agents of the time for privacy reasons. I have commented out the',
        '# main directive so the Internet Archive (https://archive.org)',
        '# can archive this site.',
        '#',
        '# -dwk',
        '#  May 17, 2024',
        '#',
        '# User-agent: *',
        '# Disallow: /',
        '',
      ].join('\n'),
      directives: [
        'Allow: /',
        '',
        'User-agent: Can Harm Humans',
        'Disallow: /',
        '',
        'User-agent: Can Ignore Human Orders',
        'Disallow: /',
        '',
        'User-agent: Can Harm Self',
        'Disallow: /',
      ],
    },
    fourOhFour: { layout: 'layouts/base.njk', title: '404 Not Found' },
    disableConfig: {
      images: true,
      markdown: true,
      contentFilters: true,
      schemaValidation: true,
      bundles: true,
    },
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ 'src/_css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'src/_js': 'js' });
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/.well-known');

  // Archive static assets (iWeb-generated CSS, JS, images)
  eleventyConfig.addPassthroughCopy('src/David_and_Shawna/**/*.css');
  eleventyConfig.addPassthroughCopy('src/David_and_Shawna/**/*.js');
  eleventyConfig.addPassthroughCopy('src/David_and_Shawna/**/*.{jpg,png,gif}');

  return {
    templateFormats: ['njk', 'html', '11ty.js', '11ty.ts'],
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}

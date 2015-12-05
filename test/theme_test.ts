import MarkdownTheme from '../src/theme';
import {Test} from 'nodeunit';
import * as td from 'typedoc';

export default {
  'getUrls returns td.output.UrlMapping[] in which all url extensions are replaced with .md': (test: Test) => {
    // stub super method
    const original = td.output.DefaultTheme.prototype.getUrls;
    td.output.DefaultTheme.prototype.getUrls = () => {
      return [
        {
          url: 'a.html',
          model: null,
          template: 'template'
        },
        {
          url: 'b.html#1',
          model: {
            url: 'c.html',
            children: [
              {
                url: 'd.html#2',
                children: [
                  { url: 'e.html' },
                  { url: 'f.html#3' }
                ]
              },
              {
                url: 'g.html',
                children: []
              }
            ]
          },
          template: 'template'
        }
      ];
    };

    test.deepEqual(
      MarkdownTheme.prototype.getUrls(null),
      [
        {
          url: 'a.md',
          model: null,
          template: 'template'
        },
        {
          url: 'b.md#1',
          model: {
            url: 'c.md',
            children: [
              {
                url: 'd.md#2',
                children: [
                  { url: 'e.md' },
                  { url: 'f.md#3' }
                ]
              },
              {
                url: 'g.md',
                children: []
              }
            ]
          },
          template: 'template'
        }
      ]
    );

    td.output.DefaultTheme.prototype.getUrls = original;
    test.done();
  },

  'getNavigation returns td.output.NavigationItem in which all url extensions are replaced with .md': (test: Test) => {
    // stub super method
    const original = td.output.DefaultTheme.prototype.getNavigation;
    td.output.DefaultTheme.prototype.getNavigation = () => {
      return {
        title: 'title',
        url: 'a.html',
        dedicatedUrls: [
          'b.html',
          'c.html#1',
          'd.html'
        ],
        parent: null,
        children: [
          {
            title: 'title',
            url: 'e.html#2',
            dedicatedUrls: [
              'f.html',
              'g.html#3'
            ],
            parent: null,
            children: [
              {
                title: 'title',
                url: 'h.html',
                dedicatedUrls: [
                  'i.html#4'
                ],
                parent: null,
                children: [],
                cssClasses: 'bar',
                isLabel: true,
                isVisible: true,
                isCurrent: true,
                isGlobals: true,
                isInPath: true
              }
            ],
            cssClasses: 'bar',
            isLabel: true,
            isVisible: true,
            isCurrent: true,
            isGlobals: true,
            isInPath: true
          },
          {
            title: 'title',
            url: 'j.html#5',
            dedicatedUrls: [
              'k.html#6',
              'l.html',
              'm.html',
              'n.html#7'
            ],
            parent: null,
            children: null,
            cssClasses: 'bar',
            isLabel: true,
            isVisible: true,
            isCurrent: true,
            isGlobals: true,
            isInPath: true
          }
        ],
        cssClasses: 'foo bar',
        isLabel: true,
        isVisible: true,
        isCurrent: true,
        isGlobals: true,
        isInPath: true
      };
    };

    test.deepEqual(
      MarkdownTheme.prototype.getNavigation(null),
      {
        title: 'title',
        url: 'a.md',
        dedicatedUrls: [
          'b.md',
          'c.md#1',
          'd.md'
        ],
        parent: null,
        children: [
          {
            title: 'title',
            url: 'e.md#2',
            dedicatedUrls: [
              'f.md',
              'g.md#3'
            ],
            parent: null,
            children: [
              {
                title: 'title',
                url: 'h.md',
                dedicatedUrls: [
                  'i.md#4'
                ],
                parent: null,
                children: [],
                cssClasses: 'bar',
                isLabel: true,
                isVisible: true,
                isCurrent: true,
                isGlobals: true,
                isInPath: true
              }
            ],
            cssClasses: 'bar',
            isLabel: true,
            isVisible: true,
            isCurrent: true,
            isGlobals: true,
            isInPath: true
          },
          {
            title: 'title',
            url: 'j.md#5',
            dedicatedUrls: [
              'k.md#6',
              'l.md',
              'm.md',
              'n.md#7'
            ],
            parent: null,
            children: null,
            cssClasses: 'bar',
            isLabel: true,
            isVisible: true,
            isCurrent: true,
            isGlobals: true,
            isInPath: true
          }
        ],
        cssClasses: 'foo bar',
        isLabel: true,
        isVisible: true,
        isCurrent: true,
        isGlobals: true,
        isInPath: true
      }
    );

    td.output.DefaultTheme.prototype.getNavigation = original;
    test.done();
  }
}

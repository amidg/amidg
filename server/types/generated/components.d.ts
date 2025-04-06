import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksChronologySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_chronology_sections';
  info: {
    displayName: 'ChronologySection';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<'images', true>;
    order: Schema.Attribute.Integer & Schema.Attribute.Unique;
    title: Schema.Attribute.String;
    year: Schema.Attribute.Integer & Schema.Attribute.Unique;
  };
}

export interface BlocksConnectSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_connect_sections';
  info: {
    displayName: 'ConnectSection';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    github: Schema.Attribute.Component<'elements.link', true>;
    resume: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
    twitter: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footer_sections';
  info: {
    description: '';
    displayName: 'FooterSection';
  };
  attributes: {
    aboutText: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    github: Schema.Attribute.Component<'elements.link', false>;
    linkedin: Schema.Attribute.Component<'elements.link', false>;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    resume: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_intro_sections';
  info: {
    description: '';
    displayName: 'IntroSection';
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutTitle: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    listItems: Schema.Attribute.JSON;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    nowTitle: Schema.Attribute.String;
    occupation: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ProjectOrganizationProjectYear extends Struct.ComponentSchema {
  collectionName: 'components_project_organization_project_years';
  info: {
    description: '';
    displayName: 'Year';
  };
  attributes: {
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    year: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.chronology-section': BlocksChronologySection;
      'blocks.connect-section': BlocksConnectSection;
      'blocks.footer-section': BlocksFooterSection;
      'blocks.intro-section': BlocksIntroSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'project-organization.project-year': ProjectOrganizationProjectYear;
    }
  }
}

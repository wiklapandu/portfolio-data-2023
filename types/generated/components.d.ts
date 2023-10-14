import type { Schema, Attribute } from '@strapi/strapi';

export interface JobsExperienceJob extends Schema.Component {
  collectionName: 'components_jobs_experience_jobs';
  info: {
    displayName: 'Experience Job';
    icon: 'earth';
  };
  attributes: {
    signIn: Attribute.Date;
    resign: Attribute.Date;
    location: Attribute.String;
    roleTitle: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'jobs.experience-job': JobsExperienceJob;
    }
  }
}

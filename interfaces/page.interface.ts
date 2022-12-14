export enum PageLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface PageAdvantage {
    title: string;
    description: string;
    _id: string;
}

export interface HhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
    _id: string;
}

export interface Blog {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    views: number;
    _id: string;
}

export interface Comparison {
    metaTitle: string;
    metaDescription: string;
    qas: any[];
    _id: string;
}

export interface Learningclub {
    metaTitle: string;
    metaDescription: string;
    qas: any[];
    _id: string;
}

export interface PageModel {
    _id: string;
    tags: string[];
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText?: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: PageLevelCategory;
    advantages?: PageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    hh?: HhData;
    qas: any[];
    addresses: any[];
    categoryOn: string;
    blog: Blog;
    sravnikus: Comparison;
    learningclub: Learningclub;
}
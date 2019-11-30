import lunr from 'lunr';

import { isNullOrEmpty } from '../utils/string-utils';


// const helpFindAlcohol = function (builder) {
//     const pipelineFunction = function (token) {
//         console.log('TOKEN', token);

//         return token;
//     }

//     lunr.Pipeline.registerFunction(pipelineFunction, 'helpFindAlcohol');
//     builder.pipeline.before(lunr.stemmer, pipelineFunction);
// }

export class MenuItemsRepository {
    constructor() {
        this.init = this.init.bind(this);
        this.search = this.search.bind(this);
    }

    init({ documents }) {
        this.documentLookup = new Map();
        documents.forEach(doc => this.documentLookup.set(doc.id, doc));

        this.searchIndex = lunr(function () {
            this.ref('id');
            this.field('category');
            this.field('title');
            this.field('ingredients');
            this.field('tags');

            documents.forEach(function (doc) { this.add(doc) }, this);
        });
    }

    search(term = null) {
        if (isNullOrEmpty(term)) {
            return Array.from(this.documentLookup.values());
        }

        const searchResults = this.searchIndex.search.call(this.searchIndex, term);
        return searchResults.map(result => this.documentLookup.get(result.ref));
    }
}
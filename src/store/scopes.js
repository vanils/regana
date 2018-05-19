
const cache = [];

/**
 * Storage for scopes.
 *
 * @namespace store.scope
 */
const files = {

  /**
   * Add new scope to scope store.
   *
   * @memberof store.scope
   * @param {Scope} scope - Scope to be added to store.
   *
   * @example
   * scopes.add(myScope);      // scope is now added to storage
   */
  add: scope => {
    cache.push(scope);
  },

  /**
   * Get all scopes from store.
   *
   * @memberof store.scope
   * @returns {[Scope]} Array of Scopes.
   *
   * @example
   * scopes.getAll();      // returns scope by that id or null
   */
  getAll: () => cache
};

module.exports = files;
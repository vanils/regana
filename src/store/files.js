
const cache = [];

/**
 * Storage for files.
 *
 * @namespace store.file
 */
const files = {

  /**
   * Add new file to file store.
   *
   * @memberof store.file
   * @param {File} file - File to be added to store.
   *
   * @example
   * files.add(myFile);      // file is now added to storage
   */
  add: file => {
    cache.push(file);
  },

  /**
   * Get file from store by id.
   *
   * @memberof store.file
   * @param {string} id - Id of the file you would like to access to.
   * @returns {File} File which matches the id.
   *
   * @example
   * files.get('File_1');      // returns file by that id or null
   */
  get: id => {
    return cache.find(file => file.id === id) || null;
  }
};

module.exports = files;
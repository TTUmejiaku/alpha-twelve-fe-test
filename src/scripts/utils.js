const linkClasses = [
  ".sidebar__menu-item",
  ".sidebar__menu-item--notification",
  ".main-panel__footer-menu-link",
];

// Constants for sort directions
export const SORT_DIRECTIONS = {
  ASCENDING: "asc",
  DESCENDING: "desc",
  NONE: "none",
};

export function updateActiveItem(activeItem) {
  // Remove active class from all items
  document
    .querySelectorAll(linkClasses)
    .forEach((item) => item.classList.remove("active"));

  // Add active class to clicked item
  document
    .querySelectorAll(`[data-id="${activeItem}"]`)
    .forEach((item) => item.classList.add("active"));
}

export class TableUtils {
  /**
   * Sort data based on a specific field and direction
   * @param {Array} data - Array of objects to sort
   * @param {string} field - Field to sort by
   * @param {string} direction - Sort direction ('asc', 'desc', 'none')
   * @returns {Array} Sorted array
   */
  static sortData(data, field, direction) {
    if (direction === SORT_DIRECTIONS.NONE) {
      return [...data]; // Return copy of original data
    }

    return [...data].sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];

      // Handle date strings
      if (field === "date") {
        valueA = new Date(valueA);
        valueB = new Date(valueB);
      }
      // Handle strings (case-insensitive)
      else if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (direction === SORT_DIRECTIONS.ASCENDING) {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
    });
  }

  /**
   * Filter data based on multiple criteria
   * @param {Array} data - Array of objects to filter
   * @param {Object} filters - Object containing filter criteria
   * @returns {Array} Filtered array
   */
  static filterData(data, filters) {
    return data.filter((item) => {
      return Object.entries(filters).every(([field, filterValue]) => {
        // Skip empty filter values
        if (!filterValue) return true;

        const itemValue = item[field];

        // Handle different types of filters
        switch (typeof filterValue) {
          case "string":
            // Case-insensitive string search
            return itemValue.toLowerCase().includes(filterValue.toLowerCase());

          case "object":
            if (Array.isArray(filterValue)) {
              // Handle array of possible values (e.g., multiple statuses)
              return (
                filterValue.length === 0 || filterValue.includes(itemValue)
              );
            }
            if (filterValue instanceof Date) {
              // Handle date ranges
              const itemDate = new Date(itemValue);
              return (
                filterValue.start <= itemDate && itemDate <= filterValue.end
              );
            }
            return true;

          default:
            return itemValue === filterValue;
        }
      });
    });
  }

  /**
   * Get unique values for a specific field in the data
   * @param {Array} data - Array of objects
   * @param {string} field - Field to get unique values from
   * @returns {Array} Array of unique values
   */
  static getUniqueValues(data, field) {
    return [...new Set(data.map((item) => item[field]))];
  }
}

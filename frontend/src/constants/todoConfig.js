// Configuration constants for the todo application
export const TODO_CONFIG = {
  // Task form configuration
  FORM: {
    DIALOG_TITLES: {
      ADD: 'Add Tasks',
      EDIT: 'Edit Tasks'
    },
    DIALOG_DESCRIPTIONS: {
      ADD: 'Add your tasks here. You can edit or delete them later.',
      EDIT: 'Make your changes here.'
    },
    DEFAULT_VALUES: {
      TITLE: 'Studying',
      DESCRIPTION: 'Start Studying...',
      PRIORITY: 'Low'
    }
  },

  // Task stats configuration
  STATS: {
    FIELDS: [
      { name: 'Available Tasks', color: 'red', key: 'available' },
      { name: 'Completed Tasks', color: 'purple', key: 'completed' },
      { name: 'Deleted Tasks', color: 'blue', key: 'deleted' }
    ]
  },

  // Priority options
  PRIORITIES: ['High', 'Medium', 'Low'],

  // Validation rules
  VALIDATION: {
    TITLE_MIN_LENGTH: 1,
    TITLE_MAX_LENGTH: 100,
    DESCRIPTION_MIN_LENGTH: 1,
    DESCRIPTION_MAX_LENGTH: 500
  },

  // Error messages
  ERROR_MESSAGES: {
    TITLE_REQUIRED: 'Todo title is required',
    DESCRIPTION_REQUIRED: 'Todo description is required',
    TITLE_TOO_LONG: 'Title must be less than 100 characters',
    DESCRIPTION_TOO_LONG: 'Description must be less than 500 characters',
    GENERIC_ERROR: 'Something went wrong. Please try again.'
  }
}

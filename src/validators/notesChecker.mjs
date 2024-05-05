export const notesVaidators = {
    notes_id: {
        errorMessage: 'Invalid id',
        isString: true
    },
    notes: {
        isArray: true, 
        notEmpty: true ,
        errorMessage: 'Invalid notes',
    },
  }

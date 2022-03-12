import React, { useRef } from "react";

import styles from './BulkShorturlForm.module.scss';

const BulkShorturlForm = () => {

  const fileUploadClick = () => {
    if (typeof window !== 'undefined') {
      document.getElementById("fileInput")?.click();
    }
  }

  return (
    <div className={styles.bulkShorturlForm}>
      <form onSubmit={() => { }} className={styles.bulkShorturlForm__form}>
        <input
          hidden
          type="file"
          name="excel_file"
          id="fileInput"
          multiple={false}
        />
        <button
          onClick={() => fileUploadClick()}
          className={styles.bulkShorturlForm__form__uploadBtn}
          >
          Upload your Excel File
        </button>
        <button 
          type="submit"
          className={styles.bulkShorturlForm__form__submitBtn}
          >
          Show me the Wonder!
        </button>
      </form>
    </div>
  )
}

export default BulkShorturlForm;

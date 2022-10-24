import React from 'react'

const TextArea = ({textarea, setTextArea}) => {
  return (
    <>
      <label for="feedback" class="block mt-3 m-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deixe seu feedback</label>
      <textarea required
        id="feedback"
        rows="4"
        class="border p-2 m-2"
        placeholder="Feedback..."
        value={textarea}
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>
    </>
  )
}

export default TextArea

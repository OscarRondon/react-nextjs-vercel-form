export const Imput = (
  { id, name, label, type, placeholder, ...props }:
  { id: string, name: string, label: string, type: string, placeholder: string }
) => {
  return (
    <fieldset>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300' htmlFor={id}>{label}</label>
      <input
        className='border border-gray-300 text-gray-900 text-sm rounded-lg bg-white/5 border-gray-600 placeholder-gray-400  block w-full p-2.5'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </fieldset>
  )
}

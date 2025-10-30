/**
 * Извлекает список специальных атак персонажа.
 * Если описание отсутствует — подставляет "Описание недоступно".
 *
 * @param {Object} character — объект персонажа с массивом special
 * @returns {Array} массив объектов с полями {id, name, icon, description}
 */
export default function extractSpecials({ special }) {
  return special.map(({ id, name, icon, description = "Описание недоступно" }) => ({
    id,
    name,
    icon,
    description,
  }));
}

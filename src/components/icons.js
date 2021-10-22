import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronCircleLeft, faChevronCircleRight, faHatWizard, faTrash, faPencilAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const starIcon = (size, color) => (
  <FontAwesomeIcon icon={faStar} size={size} color={color} />
)

export const preIcon = (size, color) => (
  <FontAwesomeIcon icon={faChevronCircleLeft} size={size} color={color} />
)

export const nextIcon = (size, color) => (
  <FontAwesomeIcon icon={faChevronCircleRight} size={size} color={color} />
)

export const hatIcon = (size, color) => (
  <FontAwesomeIcon icon={faHatWizard} size={size} color={color} />
)

export const deleteIcon = (size, color) => (
  <FontAwesomeIcon icon={faTrash} size={size} color={color} />
)

export const editIcon = (size, color) => (
  <FontAwesomeIcon icon={faPencilAlt} size={size} color={color} />
)

export const doneIcon = (size, color) => (
  <FontAwesomeIcon icon={faCheckCircle} size={size} color={color} />
)

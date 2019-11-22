export const getCategoryColor = category => {
 switch (category) {
		case 'Sanbase': return { color: '#14C393', fill: '#EDF8F5' }
		case 'Sansheets': return { color: '#1AA168', fill: '#DCF6EF' }
		case 'Sangraphs': return { color: '#8B93B6', fill: '#E7EAF3' }
		case 'Neuro API': return { color: '#5275FF', fill: '#DAE0FD' }
		default: return { color: '#2F354D', fill: '#9FAAC4' }
	}
}

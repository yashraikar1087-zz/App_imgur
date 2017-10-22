//create our image list component
//import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES=[{title:'pen',link:'http://dummyimage.com/600x400'},
				{title:'pine tree',link:'http://dummyimage.com/600x400'},
				{title:'mug',link:'http://dummyimage.com/600x400'}		
];

//create our component
const ImageList=(props)=>{
	const validImages=props.images.filter(image =>!image.is_album)
	const RenderedImages=validImages.map(image => <ImageDetail key={image.title} image={image} /> );

return(
	<ul className="media-list list-group">
		
		{RenderedImages}
	</ul>
	);
};

//export our component
export default ImageList;
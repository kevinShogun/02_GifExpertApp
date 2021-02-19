import React /* { useEffect, useState } */ from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const { data: images, loading} = useFetchGif(category); 
	
	return (
		<>
			<h3 className='animate__animated animate__lightSpeedInLeft'>{category}</h3>
            {loading && <h4 className='animate__animated animate__backInDown'>Loading</h4>}
			  <div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div> 
		</>
	);
};

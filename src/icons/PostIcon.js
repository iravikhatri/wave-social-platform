import React from 'react';

const PostIcon = ({height, width, color, classes}) => {
	return (
		<svg className={classes} height={height} width={width} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 492 492" >
			<path fill={color} d="M359.088,102.29L264.74,7.93c-5.068-5.056-11.824-7.848-19.152-7.848c-7.212,0-13.968,2.792-19.032,7.848l-94.32,94.32
				c-5.064,5.064-7.852,11.82-7.852,19.028c0,7.204,2.788,13.956,7.852,19.024l16.116,16.12c5.072,5.064,11.82,7.852,19.028,7.852
				s13.78-2.788,18.844-7.852l21.34-21.52v191.736c0,14.832,12.068,26.904,26.904,26.904h23.16c14.836,0,26.808-12.076,26.808-26.908
				V136.07l20.432,20.392c5.068,5.06,11.848,7.852,19.056,7.852c7.2,0,13.972-2.792,19.036-7.852l16.12-16.124
				c5.068-5.068,7.86-11.82,7.86-19.024C366.936,114.11,364.156,107.354,359.088,102.29z"/>
			<path fill={color} d="M453.564,149.826h-34.62c-14.724,0-26.88,12.436-26.88,27.164v22.796c0,13.556,11.532,24.804,23.064,26.644v188.612
				H76.876V226.458c7.688-0.776,11.06-3.428,15.292-7.664c5.088-5.092,7.768-11.844,7.768-19.004v-22.8
				c0-14.728-12.172-27.164-26.9-27.164H38.444C17.248,149.826,0,167.07,0,188.262v265.096c0,21.196,17.248,38.56,38.444,38.56
				h414.904c21.196,0,38.652-17.364,38.652-38.56V188.262C492,167.066,474.752,149.826,453.564,149.826z"/>
		</svg>

	)
}

export default PostIcon
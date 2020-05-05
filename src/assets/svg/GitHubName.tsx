import React from "react";

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="220"
			height="60"
			viewBox="0 0 220 60"
			className={className}
		>
			<path
				fill="#FFF"
				d="M24.9452576,0.608933518 C35.6338449,0.608933518 39.8644266,2.97652355 40.558554,3.47137119 C40.812072,3.65358726 40.8876399,3.9217313 40.8876399,4.14477839 L40.8876399,4.14477839 L38.8296343,12.858241 C38.8296343,13.3341967 38.3335679,13.8680471 37.7966704,13.7041136 C36.0896898,13.1757479 33.4052022,12.078795 27.1757285,12.078795 C19.979108,12.078795 12.3132355,14.2093213 12.3132355,30.4009557 C12.3132355,46.5895429 19.6750083,48.5146953 24.9452576,48.5146953 C29.4116842,48.5146953 31.0272521,47.9643906 31.0272521,47.9643906 L31.0272521,47.9643906 L31.0272521,36.759626 L23.831241,36.759626 C23.3558947,36.759626 22.9695235,36.3726454 22.9695235,35.8966898 L22.9695235,35.8966898 L22.9695235,26.878518 C22.9695235,26.4025623 23.3558947,26.0161911 23.831241,26.0161911 L23.831241,26.0161911 L42.2771136,26.0161911 C42.7530693,26.0161911 43.138831,26.4025623 43.138831,26.878518 L43.138831,26.878518 L43.138831,55.005 C43.138831,55.1664958 43.1114072,55.519349 42.859108,55.6582964 C42.859108,55.6582964 36.7381108,59.9699307 26.6479723,59.9699307 C14.4614349,59.9699307 -6.09418287e-05,56.217133 -6.09418287e-05,31.032313 C-6.09418287e-05,5.84810249 12.6307424,0.608933518 24.9452576,0.608933518 Z M153.749407,20.6388643 C154.222316,20.6388643 154.606249,21.0282825 154.606249,21.5078947 L154.606249,21.5078947 L154.606249,44.7462327 C154.606249,48.3850693 155.592288,50.0713296 159.308521,50.0713296 C163.024753,50.0713296 165.643424,48.1553186 165.643424,48.1553186 L165.643424,48.1553186 L165.643424,21.5078947 C165.643424,21.0282825 166.027967,20.6388643 166.500875,20.6388643 L166.500875,20.6388643 L176.806748,20.6388643 C177.281485,20.6388643 177.666637,21.0282825 177.666637,21.5078947 L177.666637,21.5078947 L177.670294,57.9895014 C177.670294,58.4672853 177.283313,58.857313 176.811623,58.857313 L176.811623,58.857313 L170.157385,58.8865651 C169.824643,58.8865651 169.516886,58.6501108 169.399269,58.4160942 C169.280432,58.1814681 169.020211,56.2020776 169.020211,56.2020776 C169.020211,56.2020776 163.539102,59.9579224 156.740432,59.9579224 C148.454172,59.9579224 142.430681,57.3136565 142.430681,46.5056233 L142.430681,46.5056233 L142.430681,21.5078947 C142.430681,21.0282825 142.817662,20.6388643 143.289352,20.6388643 L143.289352,20.6388643 Z M194.283039,2.7595928 C194.755947,2.7595928 195.139881,3.14718283 195.139881,3.62679501 L195.139881,3.62679501 L195.139881,22.0300083 C195.139881,22.0300083 199.12121,19.4180416 204.974673,19.4180416 C210.832402,19.4180416 219.501986,21.607072 219.501986,38.3587618 C219.501986,55.1104515 214.073897,59.9114488 204.608413,59.9114488 C196.546418,59.9114488 192.287803,55.8758809 192.287803,55.8758809 C192.287803,55.8758809 192.028801,58.0892881 191.849022,58.3811994 C191.666806,58.6749391 191.420601,58.8431385 191.095172,58.8431385 L191.095172,58.8431385 L183.869299,58.8431385 C183.393953,58.8431385 183.00941,58.4531108 183.00941,57.9734986 L183.00941,57.9734986 L183.00941,3.62679501 C183.00941,3.14718283 183.393953,2.7595928 183.867471,2.7595928 L183.867471,2.7595928 Z M82.5282161,9.67536842 C82.9791856,9.67536842 83.1796842,9.87038227 83.1796842,10.2598006 C83.1796842,10.2620432 83.1894847,18.971702 83.1910527,20.3652331 L83.1912632,20.5522659 L90.9820665,20.5522659 C91.4568033,20.5522659 91.8419557,20.9386371 91.8419557,21.4182493 L91.8419557,21.4182493 L91.8419557,29.7898283 C91.8419557,30.2700499 91.4568033,30.6582493 90.9820665,30.6582493 L90.9820665,30.6582493 L83.1906537,30.6582493 C83.1906537,30.6582493 83.1907964,33.6968431 83.1909437,37.0941532 L83.1912632,45.9375845 C83.1912632,48.2411856 84.4881053,50.020687 88.3146427,50.020687 C89.5103213,50.020687 90.6718726,49.8354238 91.1258892,49.8354238 C91.5817341,49.8354238 91.9863878,50.2236233 91.9863878,50.7032355 L91.9863878,50.7032355 L91.9784654,58.055867 C91.9784654,58.4020166 91.798687,58.7213518 91.4903213,58.8347036 C90.9802382,59.0230139 87.8904875,59.8524321 85.3077729,59.8524321 C79.6554183,59.8524321 71.2777452,58.6793019 71.2777452,46.7371413 L71.2777452,46.7371413 L71.2777452,30.6582493 L65.8344211,30.6582493 C65.3596842,30.6582493 64.9757507,30.2700499 64.9757507,29.7898283 L64.9757507,29.7898283 L64.9757507,23.106338 C64.9757507,22.7120443 65.2396288,22.3817396 65.5973573,22.2781385 C65.9575235,22.173928 71.2777452,20.8898837 71.2777452,20.8898837 L71.2777452,20.8898837 L71.2777452,10.2543158 C71.2777452,9.85758449 71.4995734,9.67536842 71.9121496,9.67536842 L71.9121496,9.67536842 Z M108.191368,2.75968975 C108.666105,2.75968975 109.048211,3.14727978 109.048211,3.62689197 L109.048211,3.62689197 L109.048211,23.6980831 L125.236798,23.6980831 C125.236798,23.6980831 125.235626,14.0508103 125.234907,8.1330039 L125.23436,3.62689197 C125.23436,3.14727978 125.619512,2.75968975 126.094249,2.75968975 L126.094249,2.75968975 L136.479956,2.75968975 C136.955911,2.75968975 137.336188,3.14727978 137.336188,3.62689197 L137.336188,3.62689197 L137.336188,57.9735956 C137.33497,58.4525983 136.954693,58.8432355 136.479346,58.8432355 L136.479346,58.8432355 L126.069263,58.8432355 C125.593917,58.8432355 125.208765,58.4525983 125.208765,57.9735956 C125.208765,57.9719394 125.23177,38.8968717 125.2361,35.3062854 L125.236798,34.7273352 L109.048211,34.7273352 L109.048211,57.9735956 C109.048211,58.4525983 108.666105,58.8432355 108.191368,58.8432355 L108.191368,58.8432355 L97.805662,58.8432355 C97.3333629,58.8432355 96.9482105,58.4525983 96.9482105,57.9735956 L96.9482105,57.9735956 L96.9482105,3.62689197 C96.9482105,3.14727978 97.3333629,2.75968975 97.805662,2.75968975 L97.805662,2.75968975 Z M60.2734792,20.5570194 C60.7488255,20.5570194 61.132759,20.9464377 61.132759,21.4223934 L61.132759,21.4223934 L61.132759,57.4475457 C61.132759,58.3324211 60.8816787,58.8351911 59.8584654,58.8351911 L59.8584654,58.8351911 L50.5307091,58.8351911 C49.6787424,58.8351911 49.0205706,58.5207313 49.0205706,57.4646094 L49.0205706,57.4646094 L49.0205706,21.5229474 C49.0205706,21.0469917 49.4453352,20.5570194 49.9206814,20.5570194 L49.9206814,20.5570194 Z M207.524479,39.0108393 C207.524479,30.1572105 203.948413,29.0364903 200.237055,29.3686233 C197.302097,29.6306731 194.91013,31.0969335 194.91013,31.0969335 L194.91013,31.0969335 L194.91013,48.3075152 C194.91013,48.3075152 197.335005,49.9291773 200.909853,50.0382632 C205.91074,50.1893989 207.524479,48.346518 207.524479,39.0108393 Z M55.1779501,3.99693075 C58.8771191,3.99693075 61.8754571,7.01842659 61.8754571,10.7584266 C61.8754571,14.4941607 58.8771191,17.5247978 55.1779501,17.5247978 C51.4824377,17.5247978 48.4822715,14.4941607 48.4822715,10.7584266 C48.4822715,7.01842659 51.4824377,3.99693075 55.1779501,3.99693075 Z"
			/>
		</svg>
	);
}

export { Svg as GitHubName };
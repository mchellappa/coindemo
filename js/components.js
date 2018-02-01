AFRAME.registerComponent('show-graph', {
	init() {

		this.el.addEventListener('click', () => {

			var cameraPosition = document.querySelector('[camera]').getAttribute('position'),
			chartPlaneWrapper = document.getElementById('chartPlaneWrapper'),
			newPosition = {
				x: cameraPosition.x,
				y: cameraPosition.y,
				z: cameraPosition.z - 3
			};

			RenderChartUsingD3();

			var animationDetails = 'property: position; startEvents: changeDisplay; to: ' + newPosition.x + ' ' + newPosition.y + ' ' + newPosition.z + ' dur: 3000';
			chartPlaneWrapper.setAttribute('visible', 'true');
			chartPlaneWrapper.setAttribute('animation',  animationDetails);
			chartPlaneWrapper.emit('changeDisplay');

		});

		function RenderChartUsingD3(){

			document.getElementById('chartBars').innerHTML='';

			var chart = d3.select("#chartBars")
				.selectAll()
				.data(chartData)
				.enter()
				.append("div")
				.classed("bar-container", true)
				.append("div")
				.classed("bar", true)
				.style("width", function(d) { return d.value + "%"; })
				.text(function(d) { return d.year; });

			document.getElementById('chartPlaneWrapper').setAttribute('visible', true);
		}

	}
});

AFRAME.registerComponent('get-esg-score', {
	init() {

		this.el.addEventListener('click', () => {

			var cameraPosition = document.querySelector('[camera]').getAttribute('position'),
			chartPlaneWrapper = document.getElementById('esgscore'),
			newPosition = {
				x: cameraPosition.x,
				y: cameraPosition.y,
				z: cameraPosition.z - 3
			};

			RenderesgUsingD3();

			var animationDetails = 'property: position; startEvents: changeDisplay; to: ' + newPosition.x + ' ' + newPosition.y + ' ' + newPosition.z + ' dur: 3000';
			esgscore.setAttribute('visible', 'true');
			esgscore.setAttribute('animation',  animationDetails);
			esgscore.emit('changeDisplay');

		});

		function RenderesgUsingD3(){

			document.getElementById('esgtext').innerHTML='';
      console.log("Get Data");
			d3.json( "https://api.github.com/repos/mchellappa/coindemo/contents/esgscore.json", function(error,data){
						if(error){
							console.log(error);
						} else {
							console.log(data);
						}
						var decodedData = JSON.parse(window.atob(data.content));
						console.log(decodedData.esgscore);
						var svg = d3.select("#chartBars").append("svg:svg");
						var viz1 = svg.append("rect")
													.attr("width", decodedData.esgscore)
														.attr("height",5)
														.attr("fill","blue");


						

			});



			document.getElementById('esgscore').setAttribute('visible', true);
		}

	}
});

AFRAME.registerComponent('hide-esg', {
	init() {
        this.el.addEventListener('click', () => {

			var chartPlaneWrapper = document.getElementById('esgscore');
			chartPlaneWrapper.setAttribute('animation', 'property: position; startEvents: changeDisplay; to: -150 0 0; dur: 4000');
			chartPlaneWrapper.emit('changeDisplay');

			setTimeout(function(){
				document.getElementById('esgscore').setAttribute('visible', false);
			}, 4000);
		 });
    }
});

AFRAME.registerComponent('hide-graph', {
	init() {
        this.el.addEventListener('click', () => {

			var chartPlaneWrapper = document.getElementById('chartPlaneWrapper');
			chartPlaneWrapper.setAttribute('animation', 'property: position; startEvents: changeDisplay; to: -150 0 0; dur: 4000');
			chartPlaneWrapper.emit('changeDisplay');

			setTimeout(function(){
				document.getElementById('chartPlaneWrapper').setAttribute('visible', false);
			}, 4000);
		 });
    }
});

AFRAME.registerComponent('get-esg-score60', {
	init() {

		this.el.addEventListener('click', () => {

			var cameraPosition = document.querySelector('[camera]').getAttribute('position'),
			chartPlaneWrapper = document.getElementById('esgscore60'),
			newPosition = {
				x: cameraPosition.x,
				y: cameraPosition.y,
				z: cameraPosition.z - 3
			};

			Renderesg60UsingD3();

			var animationDetails = 'property: position; startEvents: changeDisplay; to: ' + newPosition.x + ' ' + newPosition.y + ' ' + newPosition.z + ' dur: 3000';
			esgscore.setAttribute('visible', 'true');
			esgscore.setAttribute('animation',  animationDetails);
			esgscore.emit('changeDisplay');

		});

		function Renderesg60UsingD3(){

			document.getElementById('esgtext60').innerHTML='';
      console.log("Get Data");
			d3.json( "https://api.github.com/repos/mchellappa/coindemo/contents/esgscore60.json", function(error,data){
						if(error){
							console.log(error);
						} else {
							console.log(data);
						}
						var decodedData = JSON.parse(window.atob(data.content));
						console.log(decodedData.esgscore);
						var svg = d3.select("#chartBars").append("svg:svg");
						var viz1 = svg.append("rect")
													.attr("width", decodedData.esgscore)
														.attr("height",5)
														.attr("fill","blue");




			});



			document.getElementById('esgscore60').setAttribute('visible', true);
		}

	}
});

AFRAME.registerComponent('hide-esg60', {
	init() {
        this.el.addEventListener('click', () => {

			var chartPlaneWrapper = document.getElementById('esgscore60');
			chartPlaneWrapper.setAttribute('animation', 'property: position; startEvents: changeDisplay; to: -150 0 0; dur: 4000');
			chartPlaneWrapper.emit('changeDisplay');

			setTimeout(function(){
				document.getElementById('esgscore60').setAttribute('visible', false);
			}, 4000);
		 });
    }
});

AFRAME.registerComponent('get-esg-score70', {
	init() {

		this.el.addEventListener('click', () => {

			var cameraPosition = document.querySelector('[camera]').getAttribute('position'),
			chartPlaneWrapper = document.getElementById('esgscore70'),
			newPosition = {
				x: cameraPosition.x,
				y: cameraPosition.y,
				z: cameraPosition.z - 3
			};

			Renderesg70UsingD3();

			var animationDetails = 'property: position; startEvents: changeDisplay; to: ' + newPosition.x + ' ' + newPosition.y + ' ' + newPosition.z + ' dur: 3000';
			esgscore.setAttribute('visible', 'true');
			esgscore.setAttribute('animation',  animationDetails);
			esgscore.emit('changeDisplay');

		});

		function Renderesg70UsingD3(){

			document.getElementById('esgtext70').innerHTML='';
      console.log("Get Data");
			d3.json( "https://api.github.com/repos/mchellappa/coindemo/contents/esgscore70.json", function(error,data){
						if(error){
							console.log(error);
						} else {
							console.log(data);
						}
						var decodedData = JSON.parse(window.atob(data.content));
						console.log(decodedData.esgscore);
						var svg = d3.select("#chartBars").append("svg:svg");
						var viz1 = svg.append("rect")
													.attr("width", decodedData.esgscore)
														.attr("height",5)
														.attr("fill","blue");




			});



			document.getElementById('esgscore70').setAttribute('visible', true);
		}

	}
});

AFRAME.registerComponent('hide-esg70', {
	init() {
        this.el.addEventListener('click', () => {

			var chartPlaneWrapper = document.getElementById('esgscore70');
			chartPlaneWrapper.setAttribute('animation', 'property: position; startEvents: changeDisplay; to: -150 0 0; dur: 4000');
			chartPlaneWrapper.emit('changeDisplay');

			setTimeout(function(){
				document.getElementById('esgscore70').setAttribute('visible', false);
			}, 4000);
		 });
    }
});

AFRAME.registerComponent('get-esg-score90', {
	init() {

		this.el.addEventListener('click', () => {

			var cameraPosition = document.querySelector('[camera]').getAttribute('position'),
			chartPlaneWrapper = document.getElementById('esgscore90'),
			newPosition = {
				x: cameraPosition.x,
				y: cameraPosition.y,
				z: cameraPosition.z - 3
			};

			Renderesg90UsingD3();

			var animationDetails = 'property: position; startEvents: changeDisplay; to: ' + newPosition.x + ' ' + newPosition.y + ' ' + newPosition.z + ' dur: 3000';
			esgscore.setAttribute('visible', 'true');
			esgscore.setAttribute('animation',  animationDetails);
			esgscore.emit('changeDisplay');

		});

		function Renderesg90UsingD3(){

			document.getElementById('esgtext90').innerHTML='';
      console.log("Get Data");
			d3.json( "https://api.github.com/repos/mchellappa/coindemo/contents/esgscore90.json", function(error,data){
						if(error){
							console.log(error);
						} else {
							console.log(data);
						}
						var decodedData = JSON.parse(window.atob(data.content));
						console.log(decodedData.esgscore);
						var svg = d3.select("#chartBars").append("svg:svg");
						var viz1 = svg.append("rect")
													.attr("width", decodedData.esgscore)
														.attr("height",5)
														.attr("fill","blue");




			});



			document.getElementById('esgscore90').setAttribute('visible', true);
		}

	}
});

AFRAME.registerComponent('hide-esg90', {
	init() {
        this.el.addEventListener('click', () => {

			var chartPlaneWrapper = document.getElementById('esgscore90');
			chartPlaneWrapper.setAttribute('animation', 'property: position; startEvents: changeDisplay; to: -150 0 0; dur: 4000');
			chartPlaneWrapper.emit('changeDisplay');

			setTimeout(function(){
				document.getElementById('esgscore90').setAttribute('visible', false);
			}, 4000);
		 });
    }
});

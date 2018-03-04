function createDomElements(){
	//======================================= All Pages ==========================================
	inputsPage1 = createCheckbox('Page1 [Train NeuralNetwork]', false);
	inputsPage1.addClass('staticFirstLine');
	inputsPage1.style('margin', '3px')
	inputsPage1.changed(page1DataShowEvent);
	inputsPage1.style('display','inline');
	br1 = createElement("br");
  	br1.addClass('page1Brs');
  	br1.style('display','none');
	//========================================= Page 1 ===========================================
	lrSlider = createSlider(0.01, 0.5, 0.25, 0.01);
	lrSlider.addClass('page1Show');
	lrSlider.style('display','none');
	//======================================== Page 2 ============================================

	//========================================
	//Hide Page1 elements
}

function page1DataShowEvent(){
	if(this.checked()){
		//Show Page1 elements
	    page1Els = selectAll('.page1Show');
	    page1BrEls = selectAll('.page1Brs');
	    for(let i = 0; i < page1BrEls.length; i++){
	      page1BrEls[i].style('display','block');
	    }
	    for(let i = 0; i < page1Els.length; i++){
	      page1Els[i].style('display','inline');
	    }
		currentDomLines += page1DomLines;
		resizeCanvas(innerWidth - 6, innerHeight - 38 - currentDomLines * 28);
		//redraw page
		nn = new NeuralNetwork(2, trainingData.length, 1);
		auto = true;
	}else{
		//Hide Page1 elements
	    page1Els = selectAll('.page1Show');
	    page1BrEls = selectAll('.page1Brs');
	    for(let i = 0; i < page1BrEls.length; i++){
	      page1BrEls[i].style('display','none');
	    }
	    for(let i = 0; i < page1Els.length; i++){
	      page1Els[i].style('display','none');
	    }
		currentDomLines -= page1DomLines;
		resizeCanvas(innerWidth - 6, innerHeight - 38 - currentDomLines * 28);
		//redraw page
		auto = false;
		iterations = 0;
	}
}

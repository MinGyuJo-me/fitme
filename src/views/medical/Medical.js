import { useEffect, useState} from 'react';
import Breadcumb from '../component/Breadcumb/Breadcumb';
import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import Loader from '../component/loader/Loader';
import './Medical.css';
import $ from 'jquery';


function Medical() {

	useEffect(()=>{
		$('.mm-prev-btn').hide();

	var x;
    var y;
    var i;
    var p;
	var count;
	var current;
	var percent;
	var z = [];


	init();
	getCurrentSlide();
	goToNext();
	goToPrev();
	getCount();
	buildStatus();
	deliverStatus();
	goBack();

	function init() {
		$('.mm-survey-container .mm-survey-page').each(function() {
			var item;
			var page;
			item = $(this);
			page = item.data('page');
			item.addClass('mm-page-'+page);
		});

	}

	function getCount() {
		count = $('.mm-survey-page').length;
		return count;
	}

	function goToNext() {
		$('.mm-next-btn').on('click', function() {
			goToSlide(x);
			getCount();
			current = x + 1;
			var g = current/count;
			buildProgress(g);
			var y = (count + 1);
			getButtons();
			$('.mm-survey-page').removeClass('active');
			$('.mm-page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			if( $('.mm-page-'+count).hasClass('active') ){
				if( $('.mm-page-'+count).hasClass('pass') ) {
					$('.mm-finish-btn').addClass('active');
				}
				else {
					$('.mm-page-'+count+' .mm-survery-content .mm-survey-item').on('click', function() {
						$('.mm-finish-btn').addClass('active');
					});
				}
			}
			else {
				$('.mm-finish-btn').removeClass('active');
				if( $('.mm-page-'+current).hasClass('pass') ) {
					$('.mm-survey-container').addClass('good');
					$('.mm-survey').addClass('okay');
				}
				else {
					$('.mm-survey-container').removeClass('good');
					$('.mm-survey').removeClass('okay');
				}
			}
			buttonConfig();
		});

	}

	function goToPrev() {
		$('.mm-prev-btn').on('click', function() {
			goToSlide(x);
			getCount();			
			current = (x - 1);
			var g = current/count;
			buildProgress(g);
			var y = count;
			getButtons();
			$('.mm-survey-page').removeClass('active');
			$('.mm-page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			$('.mm-finish-btn').removeClass('active');
			if( $('.mm-page-'+current).hasClass('pass') ) {
				$('.mm-survey-container').addClass('good');
				$('.mm-survey').addClass('okay');
			}
			else {
				$('.mm-survey-container').removeClass('good');
				$('.mm-survey').removeClass('okay');
			}
			buttonConfig();
		});

	}

	function buildProgress(g) {
		if(g > 1){
			g = g - 1;
		}
		else if (g === 0) {
			g = 1;
		}
		g = g * 100;
		$('.mm-survey-progress-bar').css({ 'width' : g+'%' });
	}

	function goToSlide(x) {
		return x;
	}

	function getCurrentSlide() {
		$('.mm-survey-page').each(function() {
			var item;
			item = $(this);

			if( $(item).hasClass('active') ) {
				x = item.data('page');
			}
			else {
			}
			return x;
		});
	}

	function getButtons() {

		if(current === 0) {
			current = y;
		}
		if(current === count) {
			$('.mm-next-btn').hide();
		}
		else if(current === 1) {
			$('.mm-prev-btn').hide();
		}
		else {
			$('.mm-next-btn').show();
			$('.mm-prev-btn').show();
		}

	}

	$('.mm-survey-q li input').each(function() {

		var item;
		item = $(this);

		$(item).on('click', function() {
			if( $('input:checked').length > 0 ) {
		    	$('label').parent().removeClass('active');
		    	item.closest( 'li' ).addClass('active');
			}
			else {
				//
			}
		});

	});

	percent = (x/count) * 100;
	$('.mm-survey-progress-bar').css({ 'width' : percent+'%' });

	function checkStatus() {
		$('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = $(this);
			item.closest('.mm-survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		$('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = $(this);
			item.addClass('bingo');
			item.closest('.mm-survey-page').addClass('pass');
			$('.mm-survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		$('.mm-survey-item').on('click', function() {
			if( $('.mm-survey-container').hasClass('good') ){
				$('.mm-survey').addClass('okay');
			}
			else {
				$('.mm-survey').removeClass('okay');	
			}
			buttonConfig();
		});
	}


	function buttonConfig() {
		if( $('.mm-survey').hasClass('okay') ) {
			$('.mm-next-btn button').prop('disabled', false);
		}
		else {
			$('.mm-next-btn button').prop('disabled', true);
		}
	}

	function goBack() {
		$('.mm-back-btn').on('click', function() {
			$('.mm-survey-bottom').slideDown();
			$('.mm-survey-results').slideUp();
		});
	}
	})

	{/*판단 결과 값 fetch로 받을 부분*/}
	const submitData = (e) => {
		e.preventDefault();
		console.log("출력");
		$('.mm-finish-btn').on('click', function() {
			$('.mm-survey-bottom').slideUp();
			$('.mm-survey-results').slideDown();
		});
	}


	const [viewDiabetes, setViewDiabetes] = useState(true);
	const [viewHighBloodPressure, setViewHighBloodPressure] = useState(false);

	{/* 당뇨병 확인 클릭 */}
	const Diabetes = () =>{
		setViewDiabetes(true);
		setViewHighBloodPressure(false);
	}
	
	{/* 고혈압 확인 클릭 */}
	const HighBloodPressure = () =>{
		setViewDiabetes(false);
		setViewHighBloodPressure(true);
	}


  return (
    <>
		{/*헤더 위*/}
		<HeaderTop/>
		{/*헤더 메인 메뉴*/}
		<Header/>
		{/* 제목 배경화면 */}
		<Breadcumb title="Medical" content="social"/>

		<div className="container">
			{/* 전체 값을 보내는 방식 form post 또는 get으로*/}
			<form onSubmit={submitData}>
				<div className="col-sm-12" >
					<div className="mm-survey">
						<div className="mm-survey-progress">
							<div className="mm-survey-progress-bar mm-progress"></div>
						</div>

						{/* 결과값 나오는 부분 */}
						<div className="mm-survey-results">
							<div className="mm-survey-results-container">

								<div className='mm-survey-result-container'>
									{viewDiabetes &&(<div className='mm-survey-result-item'>
										다이어트 들어갈 부분 다이어트 들어갈 부분 다이어트 들어갈 부분 다이어트 들어갈 부분
									</div>)}

									{viewHighBloodPressure &&(<div className='mm-survey-result-item'>
										고혈압 들어갈 부분 고혈압 들어갈 부분 고혈압 들어갈 부분 고혈압 들어갈 부분 고혈압 들어갈 부분
									</div>)}
								</div>

								<div className="mm-survey-result-div">
									<button onClick={Diabetes}>
										당뇨병
									</button>
									<button onClick={HighBloodPressure}>
										고혈압
									</button>
								</div>
							</div>

							{/*
							<div className="mm-survey-results-controller">
								<div className="mm-back-btn">
									<button>Back</button>
								</div>
							</div>
  							*/}
						</div>

						<div className="mm-survey-bottom">
							<div className="mm-survey-container">
								<div className="mm-survey-page active" data-page="1">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>다음 내용을 입력해주세요.</p>
										</div>
										{/* name으로 값 보내면 됨. */}
										<div className="mm-survey-item">
											<span>나이</span><input className='medical-input' data-item="1" type="text"/>
										</div>
										<div className="mm-survey-item">
											<span>혈당</span><input className='medical-input' data-item="1" type="text"/>
										</div>
										<div className="mm-survey-item">
											<span>혈압</span><input className='medical-input' data-item="1" type="text"/>
										</div>
										<div className="mm-survey-item">
											<span>가장 높은 심장 박동수</span><input className='medical-input' data-item="1" type="text"/>
										</div>
									</div>
								</div>


								
								<div className="mm-survey-page" data-page="2">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>임신 경험이 있나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio01" name="radio1" data-item="2" value="yes"/>
											<label for="radio01"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio02" name="radio1" data-item="2" value="no"/>
											<label for="radio02"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>
								{/*
								<div className="mm-survey-page" data-page="3">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>당뇨병을 가진 가족이 있나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio03" name="radio2" data-item="3" value="yes"/>
											<label for="radio03"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio4" name="radio2" data-item="3" value="no"/>
											<label for="radio4"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>


								<div className="mm-survey-page" data-page="4">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>운동을 할 때 가슴에 통증을 느낀 적이 있나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio05" name="radio3" data-item="4" value="yes"/>
											<label for="radio05"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio6" name="radio3" data-item="4" value="no"/>
											<label for="radio6"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>


								<div className="mm-survey-page" data-page="5">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>팔 두께가 정상 범위에 해당하나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio07" name="radio4" data-item="5" value="yes"/>
											<label for="radio07"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio08" name="radio4" data-item="5" value="no"/>
											<label for="radio08"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>


								<div className="mm-survey-page" data-page="6">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>인슐린 수치가 정상 범위에 있는지 확인했나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio09" name="radio6" data-item="6" value="yes"/>
											<label for="radio09"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio10" name="radio6" data-item="6" value="no"/>
											<label for="radio10"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>

								<div className="mm-survey-page" data-page="7">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>가슴에 통증 또는 불편함을 느낀 적이 있나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio11" name="radio7" data-item="7" value="yes"/>
											<label for="radio11"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio12" name="radio7" data-item="7" value="no"/>
											<label for="radio12"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>


								<div className="mm-survey-page" data-page="8">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>심한 운동 후에 특별히 더 피곤하거나 불편함을 느낀 적이 있나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio13" name="radio8" data-item="8" value="yes"/>
											<label for="radio13"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio14" name="radio8" data-item="8" value="no"/>
											<label for="radio14"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>

								<div className="mm-survey-page" data-page="9">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>운동 후에도 오랫동안 피로하거나 기운이 없는 경우가 많나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio15" name="radio9" data-item="9" value="yes"/>
											<label for="radio15"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio16" name="radio9" data-item="9" value="no"/>
											<label for="radio16"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>

								<div className="mm-survey-page" data-page="10">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>심장 검사에서 혈관에 문제가 있다고 들은 적이 있나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio17" name="radio10" data-item="10" value="yes"/>
											<label for="radio17"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio18" name="radio10" data-item="10" value="no"/>
											<label for="radio18"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>


								<div className="mm-survey-page" data-page="11">
									<div className="mm-survery-content">
										<div className="mm-survey-question">
											<p>혈액과 관련된 특별한 질병을 진단받은 적이 있나요?</p>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio19" name="radio11" data-item="11" value="yes"/>
											<label for="radio19"><span></span><p>예</p></label>
										</div>
										<div className="mm-survey-item">
											<input type="radio" id="radio20" name="radio11" data-item="11" value="no"/>
											<label for="radio20"><span></span><p>아니요</p></label>
										</div>
									</div>
								</div>
								*/}
								

								
							</div>

							<div className="mm-survey-controller">
								<div className="mm-prev-btn">
									<button>Prev</button>
								</div>
								<div className="mm-next-btn">
									<button disabled="true">Next</button>
								</div>
								<div className="mm-finish-btn">
									<button>Submit</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
    </>
  );
}

export default Medical;


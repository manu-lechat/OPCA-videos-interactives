<?php include ('header.php'); ?>
	<div class="barba-container page_container game2b" id="game2b" data-namespace="game2b">
	
		<!-- Jingle Game -->
		<i id="sound_page" audio_src="03_TransitionSonore-EcranJeux.mp3"></i>

		<!-- la video dont on va changer la src en js -->
		<video src="videos/game2b_bg2.mp4"></video>

		<!-- ui -->
		<img src="img/game2b2_bg.svg" alt="">

		<ul class="qcm_container qcm2">
			<li istrue='false' qcm-value='c' class='reveal1'><div><span>c</span></div><b></li>
			<li istrue='false' qcm-value='a' class='reveal2'><div><span>a</span></div><b></li>
			<li istrue='false' qcm-value='b' class='reveal3'><div><span>b</span></div><b></li>
		</ul>

		<a href="#" id="bt_continuer_game2" class="bt_continuer active"></a>


	</div>
<?php include ('footer.php'); ?>
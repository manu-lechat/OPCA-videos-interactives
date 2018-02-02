<?php include ('header.php'); ?>
	<div class="barba-container page_container game4 game4b" data-namespace="game4">

		<i id="sound_page" audio_src="03_TransitionSonore-EcranJeux.mp3"></i>
		<video src="videos/4part1.mp4"  ></video>
	
		<img src="img/4b_ui1.svg" id="questions">
		<img src="img/4b_ui2.svg" id="reponses">


		<ul class="qcm_container qcm_multiple" id="q1">
			<li istrue='true' 	class="game4b_1a"><div></div></li>
			<li istrue='false' 	class="game4b_1b"><div></div></li>
			<li istrue='false' 	class="game4b_1c"><div></div></li>

			<li istrue='true' 	class="game4b_2a"><div></div></li>
			<li istrue='true' 	class="game4b_2b"><div></div></li>
			<li istrue='false' 	class="game4b_2c"><div></div></li>
			<li istrue='true' 	class="game4b_2d"><div></div></li>

			<li istrue='true' 	class="game4b_3a"><div></div></li>
			<li istrue='true' 	class="game4b_3b"><div></div></li>
			<li istrue='true' 	class="game4b_3c"><div></div></li>
			<li istrue='true' 	class="game4b_3d"><div></div></li>
			<li istrue='true' 	class="game4b_3e"><div></div></li>
			<li istrue='false' 	class="game4b_3f"><div></div></li>

			<li istrue='true' 	class="game4b_4a"><div></div></li>

			<li istrue='true' 	class="game4b_5a"><div></div></li>
			<li istrue='false' 	class="game4b_5b"><div></div></li>
		</ul>


			
		<!-- bouton 1 : bt_reponse_container -->
		<div class="bt_bc_container " id="bt_reponse_container"><a href="#" class="bt_validez bt_reponse" id="bt_reponse"></a></div>	

		<!-- bouton 2 : bt_qcm_container -->
		<div class="bt_bc_container  displayNone" id="bt_qcm_container"><a href="4c_Preparer_votre_liste.php" class="bt_continuez bt_qcm " id="bt_qcm"></a></div>
			
	</div>
<?php include ('footer.php'); ?>
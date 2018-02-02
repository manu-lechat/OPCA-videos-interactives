<?php include ('header.php'); ?>
	<div class="barba-container page_container game4 game4c" data-namespace="game4">

		<i id="sound_page" audio_src="03_TransitionSonore-EcranJeux.mp3"></i>
		<video src="videos/4part2.mp4"  ></video>
	
		<img src="img/4c_ui1.svg" id="questions">
		<img src="img/4c_ui2.svg" id="reponses">

		<ul class="qcm_container qcm_multiple" id="q2">
			<li istrue='true' 	class="game4c_1a"><div></div></li>
			<li istrue='true' 	class="game4c_1b"><div></div></li>
			<li istrue='false' 	class="game4c_1c"><div></div></li>

			<li istrue='false' 	class="game4c_2a"><div></div></li>
			<li istrue='true' 	class="game4c_2b"><div></div></li>

			<li istrue='true' 	class="game4c_3a"><div></div></li>
			<li istrue='true' 	class="game4c_3b"><div></div></li>
			<li istrue='true' 	class="game4c_3c"><div></div></li>
			<li istrue='true' 	class="game4c_3d"><div></div></li>
			<li istrue='false' 	class="game4c_3e"><div></div></li>
		</ul>

		<!-- bouton 1 : bt_reponse_container -->
		<div class="bt_bc_container " id="bt_reponse_container"><a href="#" class="bt_validez bt_reponse" id="bt_reponse"></a></div>	

		<!-- bouton 2 : bt_qcm_container -->
		<div class="bt_bc_container  displayNone" id="bt_qcm_container"><a href="4d_Preparer_votre_liste.php" class="bt_continuez bt_qcm " id="bt_qcm"></a></div>
			
	</div>
<?php include ('footer.php'); ?>
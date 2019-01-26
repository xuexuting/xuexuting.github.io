<?php /* Template Name: gallery */ ?>

<?php get_header(); ?>

    <!-- Page Header -->

   <section id="services" class="service-item">
    <div class="container">
      <div class="center wow fadeInDown">
		 <h2>常见品种</h2>
		  <h3 style="color:#ecdeed">在这里，你可以查阅一些常见室内植物的简介、特性和栽培方法。</h3>
</div>


            </div>

</section>

    <!-- Main Content -->
   <section id="feature" class="transparent-bg" >
    <div class="container" >
      <div class="get-started  wow fadeInDown" style="background:#ffffff">
		    <div class="col-lg-8 col-md-10 mx-auto" style=" margin-left:16%;
    margin-right: 0px;" >
				<?php
$query = new AirpressQuery();
$query->setConfig("Default");
$query->table("Plant");


$events = new AirpressCollection($query);

foreach($events as $e){
echo
	$e["Plant_Name"]."<br>
植物简介：".$e["Discription"]."<br>
植物大小：".$e["Plant_Size_copy"]."<br>
植物价格：".$e["Plant_Price_copy"]."<br>
栽培难度：".$e["Difficulty_Copy"]."<br>
光线要求：".$e["Light_Level_Copy"]."<br>
是否有毒：".$e["Pet_Friendly_Copy"]."<br>
栽培方法：".$e["Breed"]." <br>
植物功能：".$e["Function"]."<br><hr><br>";
}
?>

		  </div>


					<br>
		    <div class="clearfix" >         

		      <a class="btn btn-primary float-right" href="http://dev-xuexuting.pantheonsite.io/gallery/" style=" margin-left:45%;
    margin-right: 0px;">返回</a>
				</div>
 </div>
	   </div>

    </section>

		    <!-- Pager -->

    <hr>

 <div class="container" >

<?php if (have_posts()) :
   					while (have_posts()) :
      	 				 the_post(); ?>
     <?php if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif; ?>
    <?php endwhile;
				endif; ?>
</div>
    <?php get_footer(); ?>

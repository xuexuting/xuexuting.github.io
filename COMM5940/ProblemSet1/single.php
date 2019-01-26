<?php get_header(); ?>

    <!-- Page Header -->
  	<?php
		if ( have_posts() ) : while ( have_posts() ) : the_post();
           if ( has_post_thumbnail() ) {
				$feat_image_url = wp_get_attachment_url( get_post_thumbnail_id() );
				echo '<header class="intro-header" style="background-image:url('.$feat_image_url.');">';
           }
           endwhile;
         endif;
         ?>

      <div class="container">
        <div class="row">
          <div class="center">
            <div class="site-heading">
              <h1><?php the_title(); ?></h1>
                <hr class="small">
                 <span class="subheading">A Clean Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
   <div class="container">

      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
				<?php if (have_posts()) :
   					while (have_posts()) :
      	 				 the_post(); ?>
			        <div class="post-preview">

							<h3 class="post-subtitle">
                           		<?php the_content(); ?>
                        	</h3>
						  		   <p class="post-meta">Posted by
							<a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>"><?php the_author(); ?></a> on <?php the_date(); ?>					 	</div>
					<hr>

			      <?php endwhile;
				endif; ?>

		    <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <?php get_footer(); ?>  

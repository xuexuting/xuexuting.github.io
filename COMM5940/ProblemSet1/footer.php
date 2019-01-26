<div class="return-top" id="return_top">▲</div>
    <script>

        var return_top = document.getElementById("return_top");
        var sTop;
        window.onscroll = function(){
            //sTop :滚动条距离顶部的距离数值
            sTop = document.body.scrollTop||document.documentElement.scrollTop;
            if(sTop>300){
                return_top.className = "return-top active";
            }else{
                return_top.className = "return-top";
            }
        }

        return_top.onclick = function(){
            var termId = setInterval(function(){
                sTop-=50;
                if(sTop<=0){

                    clearInterval(termId);
                }
                window.scrollTo(0,sTop);

            },1);
        }
    </script>

<section id="bottom">
    <div class="container wow fadeInDown" data-wow-duration="800ms" data-wow-delay="500ms">
      <div class="row">
          <div class="widget">
            <h3 style="text-align: center;color:#6D8188">网站介绍和申明</h3>
            <p style="text-align: center;color:#6D8188">非常感谢您光临我的网站，这是我的个人期末作业~本网站意在为想要购买植物的小伙伴提供一些帮助，
              包括植物的选购<a href="howtobuy.html" style="color:#b094b3">（“买什么花”）</a>和栽培方法<a href="howtogrow.html" style="color:#b094b3">（“花怎么养”）</a>。<br>
              网站中提到的植物都是较为普遍的品种，一般在花店或者花鸟市场就能买到。所有的数据都是由我自己整理的，或许有错误之处，欢迎指出。<br>
      想看一些特别的植物小专题，例如多肉植物、最稀有的植物、最形象的植物，可以点击<a href="blog.html" style="color:#b094b3">“特别专题”</a>。了解一些有趣的植物知识。<br>
              住在上海的朋友也可以点击<a href="wheretobuy.html" style="color:#b094b3">"去哪里买"</a>来查看上海一些较为著名的花鸟市场。网站还在不断编写中，植物的种类也会渐渐扩充，再次感谢大家的支持。
            </ul>
          </div>
        </div>
    </div>
  </section>

  <div class="top-bar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="social">
            <ul class="social-share">
              <li><a href="#"><i class="fab fa-weixin"></i></a></li>
              <li><a href="#"><i class="fab fa-weibo"></i></a></li>
              <li><a href="#"><i class="fas fa-envelope-open"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--/.container-->
  </div>
  <!--/.top-bar-->


<footer id="footer" class="midnight-blue" >
    <div class="container">
      <div class="row">
        <div class="col-sm-6" style="color:white">
          &copy; Gp Theme. All Rights Reserved.
          <div class="credits">

            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>

      </div>
    </div>
  </footer>
  <?php wp_footer();?>
  <!--/#footer-->

</body>

</html>

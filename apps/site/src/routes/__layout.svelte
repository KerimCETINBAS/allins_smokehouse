
<script>
    import 'virtual:windi.css';
    import Footer from './_layout_components/footer.svelte';
    import Header from "./_layout_components/header.svelte";
    import SideMenu from './_layout_components/side_menu.svelte';
</script>

<!-- #region fontawesome -->
<svelte:head>
    <link rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
     integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" 
     crossorigin="anonymous" 
     referrerpolicy="no-referrer" />
</svelte:head>
<!-- #endregion fontawesome -->
<SideMenu />
<div class="cursor-none">


    <Header />
    <main>
        <slot />
    </main>
    <Footer /> 
</div>
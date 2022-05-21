<template>
  <header class="flex items-center justify-between px-8 py-5">
    <div>
      <span class="text-lg mr-2">Salmon Icons</span>
      <span class="border bg-white text-xs px-2 py-1 rounded-md">v 1.1.0</span>
    </div>
    <div>
      <a
        class="hover:text-indigo-600 hover:underline underline-offset-2"
        href="https://github.com/Owen-Tsai/salmon-icons/"
      >
        Github Repo
      </a>
    </div>
  </header>

  <main>
    <section class="py-20 text-center">
      <h1 class="text-4xl">
        Salmon Icons
      </h1>
      <p class="mt-4 text-gray-500">
        A tree-shakable Vue 3 icon library built upon
        <a
          class="text-indigo-600 hover:underline underline-offset-1"
          href="https://remixicon.com/"
        >Remix Icon</a>.
      </p>
      <div class="mt-6 flex items-center justify-center">
        <code class="border-2 border-slate-300 bg-slate-100 py-2 px-4 text-base mr-4">
          npm i @salmon-ui/icons
        </code>
        <a
          class="bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-500 active:bg-indigo-700"
          href="https://github.com/Owen-Tsai/salmon-icons#salmon-icons"
        >开始使用</a>
      </div>
    </section>

    <section class="flex flex-wrap flex-col-reverse md:flex-row px-4 md:px-8">
      <div class="w-full flex-grow md:w-[calc(100%-360px)] md:pr-6">
        <input
          class="h-10 w-full border border-slate-100 rounded-md bg-white shadow focus:outline outline-blue-600 outline-4"
        >
      </div>
      
      <aside class="w-full md:w-[360px]">
        2
      </aside>
    </section>
  </main>
</template>
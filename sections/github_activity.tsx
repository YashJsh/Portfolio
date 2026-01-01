import Image from "next/image"

export const GithubActivity = ()=>{
    return <section className="flex flex-col gap-4">
         <h2 className="font-semibold text-sm ">Contributions</h2>
         <div className="">
                    <img src="https://ghchart.rshah.org/171717/YashJsh" alt="GitHub Contributions Graph" />
        </div>
    </section>
}
import React from 'react'

const Features = () => {
  return (
    <section id="features">
        {/* Flex container */}
        <div className="container flex flex-col md:flex-row px-4 mx-auto mt-10 space-y-12 md:space-y-0">
            {/* What's Different */}
            <div className="flex flex-col space-y-12 md:w-1/2 ">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                    What's different about Manage?
                </h2>
                <p className="max-w-sm text-center md:text-left text-darkGrayishBlue">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda veniam placeat dolor, ducimus sed velit modi debitis. Autem, vero beatae?
                </p>
            </div>

            {/* Numbered List */}
            <div className="flex flex-col space-y-8 md:w-1/2">
                {/* List Item 1 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Track Company-wide Progress
                            </h3>
                        </div>
                    </div>

                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                        Track Company-Wide Progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora a blanditiis ut voluptates necessitatibus expedita cumque earum quo quaerat commodi?
                    </p>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Advance Built-in reports
                            </h3>
                        </div>
                    </div>

                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                        Track Company-Wide Progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora a blanditiis ut voluptates necessitatibus expedita cumque earum quo quaerat commodi?
                    </p>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Everything You need in one place
                            </h3>
                        </div>
                    </div>

                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                        Track Company-Wide Progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora a blanditiis ut voluptates necessitatibus expedita cumque earum quo quaerat commodi?
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features

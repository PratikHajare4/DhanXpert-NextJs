import React from 'react';

export default function XpertServices() {
    return (
        
        <section className="px-6 py-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Services provided by expert</h2>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">View All </a>
            </div>
            <p className="text-lg text-gray-600 mt-2 mb-6">Affordable procedures by expert.</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <ServiceCard icon="fas fa-handshake" title="Bond" link="#" />
                <ServiceCard icon="fas fa-shield-alt" title="Insurance" link="#" />
                <ServiceCard icon="fas fa-coins" title="Mutual Fund" link="#" />
                <ServiceCard icon="fas fa-chart-line" title="Finance" link="#" />
                <ServiceCard icon="fas fa-credit-card" title="Credit cards" link="#" />
                <ServiceCard icon="fas fa-chart-pie" title="PMS" link="#" />
                <ServiceCard icon="fas fa-university" title="Banking" link="#" />
                <ServiceCard icon="fas fa-wallet" title="Loans" link="#" />
            </div>
           

        </section>
    );
}

function ServiceCard({ icon, title, link }) {
    return (
        <a href={link} className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:bg-gray-100">
            <i className={`${icon} text-5xl text-indigo-600`}></i>
            <span className="text-center font-medium text-gray-800">{title}</span>
        </a>
    );
}
